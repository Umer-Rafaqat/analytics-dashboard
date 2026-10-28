import Card from './Card.jsx';

export default function EarningCard() {
  return (
    <Card className="flex h-[344px] w-[270px] items-center justify-center rounded-lg">
      <div className="mx-[28px] my-[30px] flex flex-col items-center text-center">
        <p className="text-[18px] font-medium leading-[100%] tracking-[0%] text-center text-[#3A3541]  " style={{ fontFamily: 'Lato' }}>
          Your earning this month
        </p>
        <p className="mt-2 text-[64px] pt-6 font-bold leading-none text-brand-600" style={{ fontFamily: 'Lato' }}>
          735.2$
        </p>
        <p className="mt-3 text-[18px] pt-6 font-medium leading-none text-gray-500" style={{ fontFamily: 'Lato' }}>
          Update your payout method in Setting
        </p>
        <button
          type="button"
          className="mt-5 w-full rounded-xl border border-brand-200 py-5 text-sm font-semibold text-brand-600 hover:bg-brand-50"
        >
          Withdraw All Earnings
        </button>
      </div>
    </Card>
  );
}
