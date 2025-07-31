import { Request, Response } from 'express';

interface ApiReferenceOptions {
  spec: {
    content: object;
  };
}

export function apiReference(options: ApiReferenceOptions) {
  const openApiSpec = JSON.stringify(options.spec.content);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>API Reference</title>
            <script src="https://unpkg.com/@stoplight/elements/web-components.min.js"></script>
            <link rel="stylesheet" href="https://unpkg.com/@stoplight/elements/styles.min.css" />
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                }
                .elements-api {
                    height: 100%;
                }
            </style>
        </head>
        <body>
            <elements-api class="elements-api" router="hash"></elements-api>
            <script>
                window.apiDocs = ${openApiSpec};
                document.querySelector('.elements-api').apiDescriptionDocument = window.apiDocs;
            </script>
        </body>
    </html>
  `.trim();

  return (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  };
}
