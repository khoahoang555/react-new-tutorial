import ProgressBar from "./ProgressBar";
import Answer from "./Answer";
import Card from "./Card";

export default function Quiz() {
  return (
      <>
        <ProgressBar/>
        <Card>
          <h1 className="mb-2 font-bold">1. “Dải phân cách” trên đường bộ gồm những loại nào?</h1>
          <Answer content="Phần mặt đường và lề đường."></Answer>
          <Answer content="Phần mặt đường và lề đường."></Answer>
          <Answer content="Phần mặt đường và lề đường."></Answer>
          <Answer content="Phần mặt đường và lề đường."></Answer>
        </Card>
      </>
  )
}