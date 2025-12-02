import { Animations } from "./components/Animations"
import { BusinessCalculator } from "./components/BusinessCalcutator"
import { Ereturn } from "./components/Ereturn"
import { Feature } from "./components/Feature"
import { Question } from "./components/Question"
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
    </div>
  )
}
export default page