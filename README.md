# Component Booster Kit

The purpose of this project is to enable rapid prototyping with pre-built components in combination with our
[React BoosterKit](https://github.com/spartansystems/booster-kit-react).

## Features

Nothing yet!

## Roadmap

The goal is to be able to yarn install this package and have access to all the components here through some simple
generator scripts, inspired by [Thoughtbot's wonderful Refills library](https://github.com/thoughtbot/refills)

## Contribution Guidelines

* Be nice. Have fun. Get productive. Make *very* cool things!

* Please enable linting on your local machine, PR's that do not pass the linter
  will not be merged

* Each component must be unit tested and well documented.

* Right now, we're using css modules.

* A story file for each component is also required so that all the components
  are available for demo in the local storybook.

* When creating a new component for the library, use one of the included
  generators:
  - `yarn run generate:stateless --  ComponentName`
  - `yarn run generate:component --  ComponentName`

## Common Commands

```bash
# get set up
yarn install

# run tests
yarn run test

# run tests and watch
yarn run test -- --watch

# start the storybook server
yarn start
```

## Component Markup Guidelines

To standardize the way are components are created for maximum reusability, try and stick as close to the following list
of recommendations when creating and contributing a new component to the component library.

### Keeping Components Atomic, Semantic & Accessible

* Keep in mind that components are **reusable packages** of code that allow multiple types of data to be entered easily.
* Please refer to [Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/table-of-contents/) for a deeper dive
into Atomic Design philosophies, methodologies and how tos.
* When writing the HTML portion of a component, keep in mind the elements you are using. There are a lot of them. Check
out [The Periodic Table of HTML Elements by Josh Duck](http://zqsmm.qiniucdn.com/data/20110511083224/index.html) for a
comprehensive list of all the available HTML elements and when and where to use them.
* Accessibility concerns for the handicap often are overlooked when writing HTML because the aria spec is still quite new.
Try and include any and all accessibility and landmark roles on all appropriate elements in your markup. For more
information on the aria spec, and accessibility in general, check out that A11Y Project](http://a11yproject.com/).
