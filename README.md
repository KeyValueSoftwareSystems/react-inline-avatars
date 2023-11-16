
  
  

# React Multi Inline Images

<a href="https://www.npmjs.com/package/@keyvaluesystems/react-multi-inline-images"><img src="https://badgen.net/npm/v/@keyvaluesystems/react-multi-inline-images?color=blue" alt="npm version"></a> <a href="https://www.npmjs.com/package/@keyvaluesystems/react-multi-inline-images" ><img src="https://img.shields.io/npm/dw/@keyvaluesystems/react-multi-inline-images?label=Downloads" /></a> <a href="https://github.com/KeyValueSoftwareSystems/react-multi-inline-images"><img src="https://github.com/KeyValueSoftwareSystems/react-multi-inline-images/actions/workflows/deploy.yml/badge.svg" alt="" /></a>

<div align="center">
<img src="./screenshot.png" alt="" width="280" height="80"/>
</div>

 
> A customizable ready to use Multiple Inline Image stack for React

Try tweaking a multiple inline image stack using this codesandbox link <a href="https://codesandbox.io/s/react-multi-inline-images-6wmoko" >here</a>

## Installation

The easiest way to use react-multi-inline-images is to install it from npm and build it into your app with Webpack.

```bash
npm install @keyvaluesystems/react-multi-inline-images
```

You’ll need to install React separately since it isn't included in the package.

## Usage

React Multi Inline Images can run in a very basic mode by just providing the `data` like given below:

```jsx

import InlineImages from "@keyvaluesystems/react-multi-inline-images";

<InlineImages
  data={dataArray}
/>

```

The data is an array of objects with the following keys:

-  `name` - a string that represents each user's name
-  `avatarUrl` - a string to specify the user image


An example for data array is shown below:

```jsx
const dataArray = [
  {
    name: "Jon Dew",
    avatarUrl: "example.svg"
  },
  {
    name: "Jack"
  }
];

```

If no avatarUrl is specified for the user, following default Image will be considered.

<div align="center">
<img src="./src/assets/default-avatar.svg" alt="" width="40" height="40"/>
</div>


## v1.1.5 (Major Version Change)

This release includes breaking changes, new features, and updates. Please read this document carefully before upgrading

### Breaking Changes
- `elivateOnHover` prop is renamed to `elevateOnHover`.
- `nameOnHover` prop is renamed to `showNameOnHover`.
- `ExtraValue` class is renamed to `ExtraCount`.


### Migration Steps

- Replace `elivateOnHover` with elevateOnHover: The `elivateOnHover` prop has been replaced with `elevateOnHover`.
- Replace `nameOnHover` with showNameOnHover: The `nameOnHover` prop has been replaced with `showNameOnHover`.
- Utilize `ExtraCount` class instead of `ExtraValue` class: To overrides the style of additional count displayed at last bubble.

<b>Before</b>

```jsx
<InlineImages
  data={dataArray}
  elivateOnHover={true}
  nameOnHover={true}
  styles={{
    Avatar: () => ({ ...styles }),
    Name: () => ({ ...styles }),
    ExtraValue: () => ({ ...styles }),
  }}
/>
```

<b>After</b>

```jsx
<InlineImages
  data={dataArray}
  elevateOnHover={true}
  showNameOnHover={true}
  styles={{
    Avatar: () => ({ ...styles }),
    Name: () => ({ ...styles }),
    ExtraCount: () => ({ ...styles }),
  }}
/>
```
## Props

  

Props that can be passed to the component are listed below:

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code><b>data:</b> object[]</code></td>
      <td>
      An array of user objects to specify the name and avatar url (image url)
      </td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code><b>totalUserCount?:</b> number</code></td>
      <td>
      To specify the total number of users present if the additional count is to be displayed at the end of the image stack. The additional count displayed will be the difference between this value and length of data array
      </td>
      <td><code>0</code></td>
    </tr>
     <tr>
      <td><code><b>size?:</b> number</code></td>
      <td>
      To specify the size of the image element
      </td>
      <td><code>40px</code></td>
    </tr>
     <tr>
      <td><code><b>variant?:</b> 'circular' | 'square' | 'rounded'</code></td>
      <td>
      To specify the shape of the image element
      </td>
      <td><code>'circular'</code></td>
    </tr>
    <tr>
      <td><code><b>elevateOnHover?:</b> boolean</code></td>
      <td>
      To add an elevation effect on hover action for user images
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code><b>showNameOnHover?:</b> boolean</code></td>
      <td>
        To show the name of each user on hovering over the user image
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code><b>onUserClick?:</b> function</code></td>
      <td>
        A callback function to be triggered on image click
      </td>
      <td><code>undefined</code></td>
    </tr>
     <tr>
      <td><code><b>onCountClick?:</b> function</code></td>
      <td>
        A callback function to be triggered on additional count(last bubble) click
      </td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code><b>spaceBetweenPics?:</b> number</code></td>
      <td>
        To specify the distance between each avatar (user image)
      </td>
      <td><code>20</code></td>
    </tr>
     <tr>
      <td><code><b>styles?:</b> object</code></td>
      <td>
        To override the default styles provided by this package. 
      </td>
      <td><code>undefined</code></td>
    </tr>
  </tbody>
</table>


## Style Customizations

All the default styles provided by this package are overridable using the `style` prop.
The below code shows all the overridable styles:

```jsx
<InlineImages
  data={dataArray}
  styles={{
    Avatar: () => ({ ...styles }),
    Name: () => ({ ...styles }),
    ExtraCount: () => ({ ...styles }),
  }}
/>

```
-  `Avatar` - overrides the avatar (user image) style
-  `Name` - overrides the user name style 
-  `ExtraCount` - overrides the style of additional count displayed at last bubble
