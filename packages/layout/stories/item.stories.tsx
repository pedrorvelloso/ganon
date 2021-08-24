import React from 'react'

import { Item } from '../src'

export default {
  title: 'Design System/Layout/Item',
  component: Item,
}

export const basicUsage = () => (
  <Item
    borderStyle="solid"
    borderColor="primary"
    borderWidth="1px"
    borderRadius="6px"
    maxWidth="300px"
  >
    <Item backgroundColor="primary" height="150px" />
    <Item padding="3" mt="2">
      <Item display="flex" alignItems="center">
        <Item
          backgroundColor="#0b6666"
          color="secondary"
          width="fit-content"
          paddingX="3"
          paddingY="1"
          fontWeight="bold"
          borderRadius="9999px"
          textTransform="uppercase"
        >
          Hot
        </Item>
        <Item
          marginLeft="2"
          fontSize="12px"
          color="gray.400"
          textTransform="uppercase"
          fontWeight="bold"
        >
          Some hot stuff
        </Item>
      </Item>
      <Item marginTop="3" isTruncated>
        Cool description, but long description boy... oh dear
      </Item>

      <Item
        backgroundColor="success"
        width="fit-content"
        mt="4"
        paddingX="18px"
        paddingY="12px"
        borderRadius="9999px"
        fontWeight="bold"
        as="button"
        border="none"
      >
        Check out
      </Item>
    </Item>
  </Item>
)
