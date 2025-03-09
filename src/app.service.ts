import { Injectable } from '@nestjs/common';

import https from 'https';

@Injectable()
export class AppService {
  getHello(): string {
    https
      .get('https://jsonplaceholder.typicode.com/posts/1/comments', (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          JSON.parse(data);
        });
      })
      .on('error', (err) => {
        console.error(err.message);
      });
    return 'Hello World!';
  }

  public postMessage() {
    const postData = JSON.stringify({
      title: 'Node.js POST request',
      body: 'This is a test request using the https module',
      userId: 1,
    });
    const options = {
      hostname: 'jsonplaceholder.typicode.com',
      path: '/posts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        JSON.parse(data);
      });
    });
    req.on('error', (err) => {
      console.error(err.message);
    });

    req.write(postData);
    req.end();
  }
}
