import React from "react";
import {
  render,
  fireEvent,
  queryByAttribute,
  queryAllByAttribute,
  waitFor,
  getByTestId
} from "@testing-library/react";
import '@testing-library/jest-dom';

import { InlineImagesPropType } from "../inline-images/types";
import { getStyles } from "../inline-images/utils/utils";
import { Elements } from "../inline-images/constants";
import InlineImages from "../inline-images";
import Avatar from "../inline-images/Avatar";

const getById = queryByAttribute.bind(null, "id");
const getAllById = queryAllByAttribute.bind(null, "id");

test("If all the users in data is rendered", async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}, {}]
  };
  const dom = render(<InlineImages {...inlineImagesProp} />);
  if (dom) {
    const images = await getAllById(dom.container, "inline-images");
    if (images?.length === 0) throw Error("Images Absent");
    expect(images.length).toBe(2)
  }
});

test("If the Onclick is triggered on images", async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}]
  };
  const onClick = jest.fn();
  const dom = render(
    <InlineImages {...inlineImagesProp} onUserClick={onClick} />
  );

  if (dom) {
    const image = await getById(dom.container, "inline-image-0");
    fireEvent.click(image);
    expect(onClick).toBeCalled();
  }
});

test("If additional count displayed on image stack", async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}, {}],
    totalUserCount: 10
  };

  const dom = render(<InlineImages {...inlineImagesProp} />);

  if (dom) {
    const extraCount = await getById(dom.container, "inline-images-extra-count");
    expect(extraCount.innerHTML).toBe("+8");
  }
});

test("If the Onclick is triggered on count click", async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}, {}, {}],
    totalUserCount: 10
  };
  const onClick = jest.fn();
  const dom = render(
    <InlineImages {...inlineImagesProp}  onCountClick={onClick} />
  );

  if (dom) {
    const image = await getById(dom.container, "inline-images-extra-count");
    fireEvent.click(image);
    expect(onClick).toBeCalled();
  }
});

test("if size is applied correctly", async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}],
    size: 40
  };
  const { container } = render(
    <InlineImages {...inlineImagesProp} />
  );

  const avatarImage = getById(container, 'avatar-image');
  if (avatarImage) {
    const inlineStyle = getComputedStyle(avatarImage);
    await waitFor(() => {
      expect(inlineStyle.width).toBe('40px');
      expect(inlineStyle.height).toBe('40px');
    });
  } else {
    throw new Error('Avatar image not found');
  }
});

test("If renderComponent is displayed onHover", async () => {
  const customRenderComponent = () => <div data-testid="custom-rendered-component">Custom Component</div>;

  const inlineImagesProp: InlineImagesPropType = {
    data: [{ renderComponent: customRenderComponent }],
    totalUserCount: 10,
    elevateOnHover: true,
    showNameOnHover: true
  };
  const { container } = render(
    <InlineImages {...inlineImagesProp} />
  );
  const avatarImage = getById(container, 'avatar-image');

  if (avatarImage) {
    fireEvent.mouseEnter(avatarImage);
    await waitFor(() => {
      const renderedComponent = getByTestId(container, "custom-rendered-component");
      expect(renderedComponent).toBeInTheDocument();
    });
  } else {
    throw new Error('avatar image not found');
  }
});

test("If name is displayed onHover", async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{ name: "John" }],
    totalUserCount: 10,
    elevateOnHover: true,
    showNameOnHover: true
  };
  const { container } = render(
    <InlineImages {...inlineImagesProp} />
  );
  const avatarImage = getById(container, 'avatar-image');

  if (avatarImage) {
    fireEvent.mouseEnter(avatarImage);
    await waitFor(() => {
      const nameElement = getById(container, "avatar-name");
      expect(nameElement).toBeInTheDocument();
    });
  } else {
    throw new Error('avatar image not found');
  }
});

test("If custom styles are passed correctly", async() => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [
      {
        name: "John",
      },
    ],
  };
  const sampleCustomStyle = {
    Name: () => ({
      color: "white",
      backgroundColor: "grey",
    }),
  };
  const { container } = render(
    <InlineImages {...inlineImagesProp} styles={sampleCustomStyle} />
  );
  const avatarImage = getById(container, 'avatar-image');

  if(avatarImage){
  fireEvent.mouseEnter(avatarImage);

  await waitFor(() => {
    const nameElement = getById(container, "avatar-name");
    if(nameElement){
    const inlineStyle = nameElement.style.cssText;

    expect(inlineStyle).toContain("color: white");
    expect(inlineStyle).toContain("background-color: grey");}})
  };
});

test("should handle image loading error by setting src to defaultImage", async () => {
  const { container } = render(<Avatar avatarUrl="invalid" />);

  const avatarImage = container.querySelector('#avatar-image');

  if (avatarImage instanceof HTMLImageElement) {
    fireEvent.error(avatarImage);

    await waitFor(() => {
      expect(avatarImage.src).not.toBe('');
    });
  } else {
    throw new Error("Avatar image not found");
  }
});

test('getStyles util should return an empty object when no styles are provided', () => {
  const result = getStyles(Elements.Name, {});
  expect(result).toEqual({});
});

test('getStyles util should return the style object for a specific element if available',async () => {
  const mockStyle = { color: 'red', fontSize: '16px' };
  const styles = {
    [Elements.Name]: () => mockStyle,
    [Elements.ExtraCount]: () => ({})
  };

  const result = getStyles(Elements.Name, styles);
  expect(result).toEqual(mockStyle);
});

