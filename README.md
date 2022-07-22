# React Listing and Paginating

[![NPM](https://nodei.co/npm/listing-pagination.svg?downloads=true&downloadRank=true)](https://www.npmjs.com/package/listing-pagination/)&nbsp;&nbsp;

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![Issues need help][help-wanted-image]][help-wanted-url]

[npm-image]: https://img.shields.io/npm/v/listing-pagination.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/listing-pagination
[download-image]: https://img.shields.io/npm/dm/listing-pagination.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/listing-pagination
[help-wanted-image]: https://img.shields.io/badge/using-issues--helper-orange?style=flat-square
[help-wanted-url]: https://github.com/ashrfhassan/listing-paginating/issues

## [Live demo](https://ashrfhassan.github.io/listing-paginating)

## ✨ Features

- 📦 flixible to customize and injecting components.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ loader and content loading.
- 🎨 simple and easy styles that can be overwritten.

## 🖥 Environment Support

- Modern browsers and Internet Explorer 11

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
npm install --save listing-pagination
```

```bash
yarn add listing-pagination
```

## 🔨 Usage

```jsx
import { useState } from 'react';
import { ListPagination, Pagination } from 'listing-pagination';

const App = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState<any>([]);
  const changePage = async (pageNumber: number) => {
    // api call using pageNumber
  };
  return (
    <>
      <ListPagination
        items={items}
        display={'Grid'}
        numberOfItemsPerRow={2}
        isLoading={false}
        loader={'ContentLoader'}
        styles={{
          itemCustomClass: 'd-flex justify-content-center',
        }}
      >
        <Pagination
          totalPages={totalPages}
          changePage={changePage}
          currentPage={1}
          itemsPerPage={20}
          maxDisplayedNumbers={6}
          hasFirstLast={true}
          hasNextPrevious={true}
          firstProps={{
            title: 'First page',
          }}
          lastProps={{
            title: 'Last page',
          }}
          previousProps={{
            title: 'Previous page',
          }}
          nextProps={{
            title: 'Next page',
          }}
          styles={{
            position={'center'}
            numberCustomClass: 'btn-primary',
          }}
        />
      </ListPagination>
    </>
  );
};

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
| loader | `React Node , 'ContentLoader'` | false | React element to use as a placeholder for items (ContentLoader for prebuilt loader). |
| header | `React Node` | false | React element to use as a header. |
| footerLeftActions | `React Node` | false | React element to use as a left section next to children. |
| footerRightActions | `React Node` | false | React element to use as a right section next to children. |
| styles | `Object` | false | contains classes for styling different sections. |

### Paginating Props

| Prop | Type | Required | Description |
|:---|:---|:---|:---|
| currentPage | `Number` | true | current page number. |
| totalPages | `Number` | true (if no totalItems) | number of total pages. |
| totalItems | `Number` | true (if no totalPages) | number of total items. |
| itemsPerPage | `Number` | true | number of displayed items per page. |
| maxDisplayedNumbers | `1,2,3,4,5,6,7,8` | false | number of displayed pagination buttons to be shown. /default [6] |
| hasNextPrevious | `Boolean` | false | whether to display previous/next buttons or not. |
| previousContent | `React Node` | false | React element to use as a content for previous button. |
| nextContent | `React Node` | false | React element to use as a content for next button. |
| hasFirstLast | `Boolean` | false | whether to display first/last buttons or not. |
| firstContent | `React Node` | false | React element to use as a content for first button. |
| lastContent | `React Node` | false | React element to use as a content for last button. |
| changePage | `Function (pageNumber, event?)` | false | function invoked after clicking on a paginating number. |
| previousPage | `Function (pageNumber, event?)` | false | function invoked after clicking on a paginating previous button. |
| nextPage | `Function (pageNumber, event?)` | false | function invoked after clicking on a paginating next button. |
| firstPage | `Function (pageNumber, event?)` | false | function invoked after clicking on a paginating first button. |
| lastPage | `Function (pageNumber, event?)` | false | function invoked after clicking on a paginating last button. |
| styles | `Object` | false | contains classes for styling different sections. |
| styles.position | `'start' , 'center' , 'end'` | false | positioning buttons horizontally. |

## 🔗 Links

- [Change Log](CHANGELOG.md)
