import { ListenSelectEnglish } from '../../../components/clientTest/ListenSelect_User/ListenSelectEnglish'
import { UserRespondInAtleastNwords } from '../../../components/clientTest/RespondInAtleastNwords/UserRespondInAtleastNwords'
import { SelectTheBestTitle } from '../../../components/clientTest/SelectTheBest/SelectTheBestTitle'
import { UserRealEnglishWord } from '../../../components/clientTest/UserRealEnglishWord/UserRealEnglishWord'
import DescrbImgUsr from '../../../components/clientTest/describeImg/DescrbImgUsr'
import HighLightAnswerUser from '../../../components/clientTest/highlightAns/HighLightAnswerUser'
import { UserMainIdea } from '../../../components/clientTest/mainIdea/UserMainIdea'
import Recording from '../../../components/clientTest/recording/Recording'
import { UserTypeWhatYouHear } from '../../../components/clientTest/typeWUHear/UserTypeWhatYouHear'

const ComponentMapping = {
   SELECT_ENGLISH_WORD: <UserRealEnglishWord />,
   SELECT_THE_MAIN_IDEA: <UserMainIdea />,
   TYPE_WHAT_YOU_HEAR: <UserTypeWhatYouHear />,
   DESCRIBE_IMAGE: <DescrbImgUsr />,
   LISTEN_AND_SELECT_ENGLISH_WORD: <ListenSelectEnglish />,
   RECORD_SAYING_STATEMENT: <Recording />,
   RESPOND_N_WORDS: <UserRespondInAtleastNwords />,
   SELECT_BEST_TITLE: <SelectTheBestTitle />,
   HIGHLIGHT_THE_ANSWER: <HighLightAnswerUser />,
}

const QuestionTypes = [
   'SELECT_ENGLISH_WORD',
   'SELECT_THE_MAIN_IDEA',
   'TYPE_WHAT_YOU_HEAR',
   'DESCRIBE_IMAGE',
   'LISTEN_AND_SELECT_ENGLISH_WORD',
   'RECORD_SAYING_STATEMENT',
   'RESPOND_N_WORDS',
   'SELECT_BEST_TITLE',
   'HIGHLIGHT_THE_ANSWER',
]

export { ComponentMapping, QuestionTypes }
