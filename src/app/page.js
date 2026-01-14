import { Animations } from "./components/Animations"
import { BusinessCalculator } from "./components/BusinessCalcutator"
import Card from "./components/Card"
import ClientList from "./components/ClientList"
import { Ereturn } from "./components/Ereturn"
import { Feature } from "./components/Feature"
import { Question } from "./components/Question"
import Reviews from "./components/Reviews"
import BDTaxationPage from "./components/services"
import { Subscription } from "./components/Subcription"
import { Update } from "./components/Update"

const page = () => {
  return (
    <div className="">
      <Animations />
      <Feature />
      <Subscription />
      <Ereturn />
      <BusinessCalculator />
      <Update />
      <Question />
      <BDTaxationPage />
      <ClientList />
      <Reviews />
      <Card/>
    </div>
  )
}
export default page