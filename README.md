# react-nano-spinner

A tiny no-configuration (and not configurable) spinner.

Spinner and CSS is based on SpinKit's "three-bounce".

Lisence: https://github.com/tobiasahlin/SpinKit/blob/master/LICENSE

## Usage

Example:

Install it with yarn or npm:

`yarn add react-nano-spinner` or `npm install --save react-nano-spinner`

    import Spinner from 'react-nano-spinner'

    ...
    render() {
        return (
            <div>
                <Spinner />
            </div>
        )
    }
    ...

To style it simply override `.nano-spinner-bounce` in your css or supply a className, example: `<Spinner className="your-extra-class" />`

## Why

For me to learn to publish a npm module and test rollup/rollup-starter-project
