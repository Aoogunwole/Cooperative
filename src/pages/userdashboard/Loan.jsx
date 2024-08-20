import { Button } from "../../components/button";
import Nav from "../../components/Nav";

const Loan = () => {
  return (
    <div className="h-screen flex flex-col">
      <Nav />

      <h2 className="font-mont text-[22px] px-6">Loan</h2>

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="text-center w-full">

          <div className="w-full p-6 rounded-md">
            <img src="../src/assets/rafiki.svg" alt="No loans" className="mx-auto mb-4" />
            <h2 className="text-[20px] font-semibold text-[#565656]">You have not applied to any loan at the moment</h2>
            <p className="text-[14px] mb-2 text-[#565656]">You will see updates on submitted applications here</p>
            <a href="/mydashboard/applyloan"><Button type="dark" title="Apply for Loan" _style="px-5 py-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
