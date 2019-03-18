/**
 * timeseries-record-base
 * Base interface for a time-series record
 */


/**
 * An atomic unit of time-series data of general form.
 */
interface TimeseriesRecordBase {
    /**
     * Time that the current Record began, in units of milliseconds
     * elapsed since January 1, 1970.
     */
    Time: number
}


export default TimeseriesRecordBase
