import { formatDate } from '@/lib/utils'

//Component used to render the date field
const DateComponent = ({dateString, options, ...rest}) => {
    return(
        <time dateTime={dateString} {...rest}>
            {formatDate(dateString, options)}
        </time>
    )
}

export default DateComponent;
