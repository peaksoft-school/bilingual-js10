// /* eslint-disable jsx-a11y/media-has-caption */
// /* eslint-disable react/jsx-boolean-value */
// import { styled } from '@mui/material'
// import React, { useState } from 'react'
// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

// export const Recording = () => {
//    const [file, setFile] = useState(null)

//    const recorderControls = useAudioRecorder()

//    const addAudioElement = (blob) => {
//       const audioFile = new File([blob], 'recording.webm', {
//          type: 'audio/webm',
//       })
//       setFile(audioFile)
//    }
//    console.log(file)

//    return (
//       <div>
//          <AudioRec>
//             <AudioRecorder
//                onRecordingComplete={addAudioElement}
//                audioTrackConstraints={{
//                   noiseSuppression: true,
//                   echoCancellation: true,
//                }}
//                // downloadOnSavePress={true}
//                downloadFileExtension="webm"
//                recorderControls={recorderControls}
//             />
//          </AudioRec>
//          <button type="button" onClick={recorderControls.stopRecording}>
//             Stop
//          </button>
//       </div>
//    )
// }

// const AudioRec = styled('div')({
// '::after': {
//    content: '"<span>hello</span>"',
// },
// })

import React, { useRef, useState, useEffect } from 'react'
import WaveSurfer from 'wavesurfer.js'

const AudioRecorder = () => {
   const [recording, setRecording] = useState(false)
   const wavesurferRef = useRef(null)
   const mediaRecorderRef = useRef(null) // Добавляем useRef для объекта MediaRecorder

   const startRecording = async () => {
      try {
         const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
         })
         const mediaRecorder = new MediaRecorder(stream)
         mediaRecorderRef.current = mediaRecorder // Сохраняем объект MediaRecorder в ref

         const chunks = [] // Добавляем массив для сохранения частей аудио

         mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
               chunks.push(event.data) // Сохраняем части аудио в массиве
            }
         }

         mediaRecorder.onstop = () => {
            setRecording(false)
            const audioBlob = new Blob(chunks, { type: 'audio/wav' }) // Создаем Blob из массива частей
            const audioUrl = URL.createObjectURL(audioBlob)

            if (wavesurferRef.current) {
               wavesurferRef.current.load(audioUrl)
            }
         }

         mediaRecorder.start()
         setRecording(true)
      } catch (error) {
         console.error('Ошибка при получении доступа к микрофону:', error)
      }
   }

   const stopRecording = () => {
      if (
         mediaRecorderRef.current &&
         mediaRecorderRef.current.state === 'recording'
      ) {
         mediaRecorderRef.current.stop()
      }
   }

   useEffect(() => {
      if (wavesurferRef.current) {
         const wavesurfer = WaveSurfer.create({
            container: wavesurferRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
         })
         wavesurferRef.current = wavesurfer
      }
   }, [])

   return (
      <div>
         <button onClick={recording ? stopRecording : startRecording}>
            {recording ? 'Stop Recording' : 'Start Recording'}
         </button>
         <div id="waveform" ref={wavesurferRef}>
            p
         </div>
      </div>
   )
}

export default AudioRecorder
