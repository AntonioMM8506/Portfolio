import { formatDate } from '@/lib/utils'

//Component used to render the date field
const DateComponent = ({dateString, options}) => {
    return(
        <time dateTime={dateString}>
            {formatDate(dateString, options)}
        </time>
    )
}

export default DateComponent;
