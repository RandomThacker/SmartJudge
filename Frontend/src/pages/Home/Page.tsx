import React from 'react'
import QuestionList from './Components/QuestionList'
import TodayQuestion from './Widgets/TodayQuestion'
import CompetitionList from './Components/Competitions/CompetitionList'

export default function Page() {
  return (
    <>
    <CompetitionList />
      <TodayQuestion />
    </>
  )
}
