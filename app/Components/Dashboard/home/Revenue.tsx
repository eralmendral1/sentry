import moment from 'moment'
import { useOutletContext } from "remix";
import type { ContextType } from "remix";
import { calculateSalesBetweenDates } from '~/helpers/calculateSalesBetweenDates';

const calculateRevenueSinceLastMonth = (branches: any) => {
    // sales since last month
    const startOfLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfThisMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');
    const totalSalesFromLastToCurentMonth =  calculateSalesBetweenDates(startOfLastMonth, endOfThisMonth, branches)

    return totalSalesFromLastToCurentMonth

export default function Revenue() {
    const { salesSummary } = useOutletContext<ContextType>()
    const totalSalesToday = calculateRevenueSinceLastMonth(salesSummary)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Revenue</span>
                <div className="text-900 font-medium text-xl">{totalSalesToday}</div>
            </div>
            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-money-bill text-orange-500 text-xl" />
            </div>
        </div>
        <span className="text-500">since last month</span>
    </div>)
}