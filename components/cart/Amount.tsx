import { formatCurrency } from "@/src/utils"

type AmountProps = {
    label: string,
    amount: number
    discount?: boolean
}

export default function Amount({label, amount, discount} : AmountProps) {
  return (
    <div className={`${discount && 'bg-green-300 text-green-700 p-1 rounded'} flex justify-between`}>
      <dt className="font-bold">
        {label}
      </dt>
      <dd className="text-gray-800">
        {discount && '-'}{formatCurrency(amount)}
      </dd>
    </div>
  )
}
