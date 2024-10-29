import { describe } from '@jest/globals';
import { createRequest, createResponse } from 'node-mocks-http';
import {
  OrderCreatedMessage,
  Order,
  LineItem,
  ProductPublishedMessage,
} from '@commercetools/platform-sdk';
import { post } from '../../src/controllers/event.controller';
import { createApiRoot } from '../../src/client/create.client';
import axios from 'axios';

describe('Testing Event Controller', () => {
  it('Product Created', () => {
    const productId = '5a3e5656-da49-4d01-b6b8-54043e745003';

    const request = createRequest({
      method: 'POST',
      body: {
        message: {
          data: Buffer.from(JSON.stringify(productId)).toString('base64'),
        },
      },
    });
    post(request, createResponse());
  });
});
