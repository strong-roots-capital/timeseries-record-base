# timeseries-record-base [![Build status](https://travis-ci.org/strong-roots-capital/timeseries-record-base.svg?branch=master)](https://travis-ci.org/strong-roots-capital/timeseries-record-base) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/timeseries-record-base.svg)](https://npmjs.org/package/@strong-roots-capital/timeseries-record-base)

> Base interface for a time-series record

## Install

``` shell
npm install @strong-roots-capital/timeseries-record-base
```

## Use

``` typescript
import TimeseriesRecordBase from '@strong-roots-capital/timeseries-record-base'
```

The `TimeseriesRecordBase` interface is defined as

``` typescript
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
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
