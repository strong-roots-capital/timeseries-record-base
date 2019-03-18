import test from 'ava'

/**
 * Library under test
 */

import TimeseriesRecordBase from '../src/timeseries-record-base'

test('record is importable', t => {
    t.pass()
})

test('Record is of expected form', t => {
    function returnRecordBase(): TimeseriesRecordBase {
        return {
            Time: 1
        }
    }
    const record: TimeseriesRecordBase = returnRecordBase()
    t.pass()
})
