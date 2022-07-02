import PropTypes from 'prop-types';
import { TableItem, TableRow} from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
    return <TableRow>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </TableRow>

}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}