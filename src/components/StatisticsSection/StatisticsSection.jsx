import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { Section, Title, List} from './StatisticsSection.styled';

export const StatisticsSection = ({ title, stats }) => {
    return <Section>
        {title && 
            <Title>{title}</Title>
        }
            <List> 
                {stats.map( item => (
                    <StatisticsItem key={item.id} label={item.label} percentage={item.percentage} />                                       
                ))}              
            </List>
    </Section>    
}

// Чи потрібно передавати тут propTypes для label та percentage, якщо їх типи перевіряються в StatisticsItem????
StatisticsSection.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    )
}
