import Card from "./Card";
import Button from "./Button";
import Quiz from "./Quiz";

export default function Result() {
  return (
      <>
        <Card>
          <h1 className="text-center font-bold mb-1 text-lg uppercase">Kết quả</h1>
          <div className="text-center p-3">
            <p className="mb-3 text-gray-600">Bạn đã làm đúng 9/10 câu!</p>
            <Button classes="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 me-2" title="Làm lại">
              <i className="ri-loop-right-line mr-2"></i>
              <span>Làm lại</span>
            </Button>
            <Button classes="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300">
              <i className="ri-information-2-line mr-2"></i>
              <span>Chi tiết</span>
            </Button>
          </div>
        </Card>

        {/*<Quiz/>*/}
        {/*<Quiz/>*/}

      </>
  )
}