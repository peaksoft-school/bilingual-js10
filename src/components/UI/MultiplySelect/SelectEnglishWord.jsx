import styled from 'styled-components'

export const SelectEnglishWord = ({
   words,
   selectedWords,
   handleSelectWord,
   onSelect,
   CheckIcon,
   VolumeUp,
}) => {
   const handleOptionSelect = () => {
      if (onSelect && typeof onSelect === 'function') {
         onSelect()
      }
   }

   return (
      <Container onClick={handleOptionSelect}>
         {words.map((word) => (
            <div
               key={word}
               className={`ContainerMultiply ${
                  selectedWords.includes(word) ? 'checked' : ''
               }`}
            >
               <div className="textCon">
                  {VolumeUp && <VolumeUp />}
                  <p>{word}</p>
               </div>
               <div className="InputCheckBox">
                  <button
                     className={`IconValue ${
                        selectedWords.includes(word) ? 'checked' : ''
                     }`}
                     onClick={() => handleSelectWord(word)}
                  >
                     {CheckIcon && <CheckIcon />}
                  </button>
               </div>
            </div>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   width: '800px',
   flexWrap: 'wrap',
   columnGap: '70px',
   rowGap: '20px',
   '.ContainerMultiply': {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1.5px solid #D4D0D0',
      borderRadius: '0.5rem',
      width: '12.3rem',
      height: '2.6rem',
      paddingLeft: '10px',
      color: '#4C4859',
      lineHeight: '1rem',
   },
   ' .textCon': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '0.7rem',
      alignItems: 'center',
   },
   ' .InputCheckBox': {
      display: 'flex',
      width: '3rem',
      height: '2.6rem',
      justifyContent: 'center',
      alignItems: 'center',
   },
   ' .checked': {
      width: '12.4rem',
      color: '#4C4859',
      border: ' 2px solid #3A10E5',
   },
   ' .IconValue': {
      width: '3.3rem',
      height: '2.6rem',
      border: '1.5px solid #D4D0D0',
      borderRadius: '0rem 0.5rem 0.5rem 0rem',
      borderRight: 'none',
      color: '#D4D0D0',
      background: 'white',
   },
   ' .IconValue.checked': {
      color: 'white',
      background: '#3A10E5',
      border: ' 1.5px solid #3A10E5',
   },
}))
