import PropTypes from 'prop-types';
import {TransactionItem} from '../TransactionItem/TransactionItem'
import { Table, TableTitle, TableTitleItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table>
        <TableTitle>
            <tr>
                <TableTitleItem>Type</TableTitleItem>
                <TableTitleItem>Amount</TableTitleItem>
                <TableTitleItem>Currency</TableTitleItem>
            </tr>
        </TableTitle>

        <tbody>
            {items.map(item => (
                <TransactionItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
            ))}  
        </tbody>
</Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}