import React from 'react';
import {
    render,
    fireEvent,
    queryByAttribute,
    queryAllByAttribute
} from "@testing-library/react";
import { InlineImagesPropType } from '../inline-images/types';
import InlineImages from '../inline-images';

const getById = queryByAttribute.bind(null, 'id');
const getAllById = queryAllByAttribute.bind(null, 'id');

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

test("If the Onclick is triggered on images",async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}]
  };
  const onClick = jest.fn();
  const dom = render(
    <InlineImages
      {...inlineImagesProp}
      onUserClick={onClick}
    />
  );

  if (dom) {
    const image = await getById(dom.container, "inline-image-0");
    fireEvent.click(image);
    expect(onClick).toBeCalled();
  }
});

test("If additional count displayed on image stack",async () => {
  const inlineImagesProp: InlineImagesPropType = {
    data: [{}, {}],
    totalUserCount: 10
  };

  const dom = render(<InlineImages {...inlineImagesProp} />);

  if (dom) {
    const extraValue = await getById(dom.container, "inline-images-extra-value");
    expect(extraValue.innerHTML).toBe("8 +");
  }
})