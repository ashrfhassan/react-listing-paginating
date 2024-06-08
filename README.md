# React Listing and Paginating

[![NPM](https://nodei.co/npm/react-listing-pagination.svg?downloads=true&downloadRank=true)](https://www.npmjs.com/package/react-listing-pagination/)&nbsp;&nbsp;

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![Issues need help][help-wanted-image]][help-wanted-url]

[npm-image]: https://img.shields.io/npm/v/react-listing-pagination.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-listing-pagination
[download-image]: https://img.shields.io/npm/dm/react-listing-pagination.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/react-listing-pagination
[help-wanted-image]: https://img.shields.io/badge/using-issues--helper-orange?style=flat-square
[help-wanted-url]: https://github.com/ashrfhassan/react-listing-paginating/issues

## [Live demo](https://ashrfhassan.github.io/react-listing-paginating)

## ✨ Features

- 📦 flixible to customize and injecting components.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ loader and content loading.
- 🎨 simple and easy styles that can be overwritten.
- ♊  RTL support.

## 🖥 Environment Support

- Modern browsers and Internet Explorer 11

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
npm install --save react-listing-pagination
```

```bash
yarn add react-listing-pagination
```

## 🔨 Usage

### using items displayer which works with flexbox (rows, cols) along with paginator

```jsx
import { useState } from 'react';
import { Listing, Pagination } from 'react-listing-pagination';

const CustomComponent = () => {
  const [totalPages, setTotalPages] = useState(1000);
  const [items, setItems] = useState<any>([]);

  return (
    <>
      <Listing
        items={items}
        display={'Grid'}
        numberOfItemsPerRow={2}
        isLoading={false}
        loader={'ContentLoader'}
        styles={{
          itemClass: 'd-flex justify-content-center',
        }}
      >
        <Pagination
          totalPages={totalPages}
          onChangePage={(pageNumber: number, event: any) => { console.log('current page is ' + pageNumber)}}
          currentPage={1}
          itemsPerPage={20}
          displayedNumbersCount={6}
          firstBtnProps={{
            title: 'First page',
          }}
          lastBtnProps={{
            title: 'Last page',
          }}
          previousBtnProps={{
            title: 'Previous page',
          }}
          nextBtnProps={{
            title: 'Next page',
          }}
          styles={{
            position:'center',
            numberBtnClass: 'btn-primary',
          }}
        />
      </Listing>
    </>
  );
};

```

### or you can only use the paggination logic

```jsx
import { useState } from 'react';
import { Listing, Pagination } from 'react-listing-pagination';

const CustomComponent = () => {
  const [totalPages, setTotalPages] = useState(1000);

  return (
    <>
        <Pagination
          totalPages={totalPages}
          onChangePage={(pageNumber: number, event: any) => { console.log('current page is ' + pageNumber)}}
          currentPage={1}
          itemsPerPage={20}
          displayedNumbersCount={6}
          firstBtnProps={{
            title: 'First page',
          }}
          lastBtnProps={{
            title: 'Last page',
          }}
          previousBtnProps={{
            title: 'Previous page',
          }}
          nextBtnProps={{
            title: 'Next page',
          }}
          styles={{
            position:'center',
            numberBtnClass: 'btn-primary',
          }}
        />
    </>
  );
};

```

### RTL suport

simply by adding `dir` prop to html tag the package with switch to rtl.

```jsx
<html dir="rtl">
<Pagination/>
</html>
<html dir="ltr">
<Pagination/>
</html>
```

### TypeScript

`this package` is written in TypeScript, check [Use in TypeScript](https://www.typescriptlang.org/) to get started.

### listing Props

| Prop | Type | Required | Description |
|:---|:---|:---|:---|
| children | `React Node` | false | should be paginating component as a child. |
| items | `Array of React Node` | true | an array of components to be displayed. |
| numberOfItemsPerRow | `Number` | false | number of items each row it only available in display `Grid`. |
| display | `Grid , Rows` | false | items displaying style / default [Grid]. |
| isLoading | `Boolean` | false | used for loading time / default [false]. |
| loader | `React Node , 'ContentLoader'` | false | placeholder for items (ContentLoader for prebuilt loader). |
| header | `React Node` | false | header. |
| footerLeftActions | `React Node` | false | left section next to children. |
| footerRightActions | `React Node` | false | right section next to children. |
| styles | `Object` | undefined | contains classes for styling different sections. |

### listing Styles Object

| Prop | Type | Required | Description |
|:---|:---|:---|:---|
| containerClass | `'start' , 'center' , 'end'` | false | positioning buttons horizontally. |
| headerClass | `string` | false | buttons wrapper css class. |
| itemClass | `string` | false | next button css class. |
| footerClass | `string` | false | previous button css class. |

### Paginating Props

| Prop | Type | Required | Description |
|:---|:---|:---|:---|
| currentPage | `Number` | true | current page number. |
| totalPages | `Number` | true (if no totalItems) | number of total pages. |
| totalItems | `Number` | true (if no totalPages) | number of total items. |
| itemsPerPage | `Number` | true | number of displayed items per page. |
| displayedNumbersCount | `Number` | false | number of displayed pagination buttons to be shown. /default [6] (important this number doesn't include gap property buttons count) |
| previousBtnContent | `string | React Node` | false | content for previous button. |
| nextBtnContent | `string | React Node` | false | content for next button. |
| firstBtnContent | `string | React Node` | false | content for first button. |
| lastBtnContent | `string | React Node` | false | content for last button. |
| numbersGapBtnContent | `string | React Node` | false | content for gap button whether to display numbers gap (...) to shortcut to first/last page or not. |
| numberBtnProps | `HTML Button native props` | defaults | native props of page number button. |
| previousBtnProps | `HTML Button native props` | defaults | native props of previous page button. |
| nextBtnProps | `HTML Button native props` | defaults | native props of next page button. |
| firstBtnProps | `HTML Button native props` | defaults | native props of first page button. |
| lastBtnProps | `HTML Button native props` | defaults | native props of last page button. |
| onChangePage | `(pageNumber, event?) => void` | false | invoked after clicking on a paginating number. |
| OnPreBtnClick | `(pageNumber, event?) => void` | false | invoked after clicking on a paginating previous button. |
| OnNextBtnClick | `(pageNumber, event?) => void` | false | invoked after clicking on a paginating next button. |
| OnFirstBtnClick | `(pageNumber, event?) => void` | false | invoked after clicking on a paginating first button. |
| OnLastBtnClick | `(pageNumber, event?) => void` | false | invoked after clicking on a paginating last button. |
| styles | `Object` | undefined | contains classes for styling different sections. |

### Paginating Styles Object

| Prop | Type | Required | Description |
|:---|:---|:---|:---|
| position | `'start' , 'center' , 'end'` | false | positioning buttons horizontally. |
| containerClass | `string` | false | buttons wrapper css class. |
| numberBtnClass | `string` | false | page number button css class. |
| nextBtnClass | `string` | false | next button css class. |
| previousBtnClass | `string` | false | previous button css class. |
| firstBtnClass | `string` | false | first button css class. |
| lastBtnClass | `string` | false | last button css class. |
| activeBtnClass | `string` | false | active button css class. |

## 🔗 Links

- [Change Log](CHANGELOG.md)
