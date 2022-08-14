import { writable } from 'svelte/store';

export const logoIcons = writable({
	"oneezy-icon": {
		"body": `
      <path d="M237 73.2a186 186 0 0 0-82.3 29.7 183.8 183.8 0 0 0-81 129.3 261 261 0 0 0 .5 49.8c4.6 34 20.7 68.8 43.9 95.2 12.3 14 31 29.4 46 37.9a236.9 236.9 0 0 0 22.3 10.8c7 3.6 29.6 9.8 42.8 11.8 10.5 1.6 34.7 2 46.5 1a189.5 189.5 0 0 0 78.8-27.6 193 193 0 0 0 54.4-53.3 187.4 187.4 0 0 0 29.8-82.1c1-10 .5-36.6-.8-45.7A183.8 183.8 0 0 0 282.4 74.2c-8.2-1.4-36.2-2-45.4-1zm41.7 55.6c27 5 50.4 17.3 68.9 36.2a127 127 0 0 1 37.4 94 129.4 129.4 0 0 1-153.3 124 130 130 0 0 1-102-99.6c-2.2-9.6-2.7-15-2.6-28.6 0-15.8 2-27.5 7-41.6a129.4 129.4 0 0 1 144.6-84.5zM119 260.7c.1 3.4.3 7 .5 8l.7 5.5c3.4 29 19.9 61.2 41.3 81.1 25.3 23.4 58 37 89.8 37.4h4.6v39.4l-7.2-.3a176 176 0 0 1-17.3-1.6l-4.6-.6c-5.7-.8-20.6-4.6-28.9-7.5a194 194 0 0 1-51.7-28.5 242 242 0 0 1-29.1-29.4 176.3 176.3 0 0 1-37-109c.3-.4 9-.7 19.6-.7H119l.1 6.2z"/>
    `,
    "attributes": {
      "viewBox": "0 0 512 512",
    }
	},
	"oneezy-logo": {
		"body": `
      <defs>
        <path id="a" d="M275.6 2.7h-4.9l17.4 35.1L270.7 74h5l18-36.2zm-11.4 42H228l36.6-42.2h-6.4l-40.7 47h47v-4.8zm-77.4-21.1v4.6h23.8V26A24.2 24.2 0 0 0 204 9.7a23 23 0 0 0-33.4 0 23.7 23.7 0 0 0-.5 32.3 23.3 23.3 0 0 0 17.2 7.3h.5v-4.7h-.5a19.6 19.6 0 0 1-12.1-4.5 17.6 17.6 0 0 1-6.5-14.1c-.1-2.6.4-5 1.4-7.4a19.4 19.4 0 0 1 10-9.8c2.3-1 4.7-1.5 7.2-1.5 2.9 0 5.5.6 7.8 1.7a21.9 21.9 0 0 1 9.6 9.6c.8 2 1.2 3.6 1.2 5h-19.1zm-53.8 0v4.6h24V26c0-3-.6-6-1.7-8.8A23 23 0 0 0 117 9.7a23.7 23.7 0 0 0-.5 32.3 23.3 23.3 0 0 0 17 7.3h.6v-4.7h-.5a19.6 19.6 0 0 1-12.1-4.5A17.6 17.6 0 0 1 115 26c0-2.6.4-5 1.5-7.4a19.4 19.4 0 0 1 10-9.8 17 17 0 0 1 7.1-1.5c3 0 5.5.6 7.8 1.7a20 20 0 0 1 9.6 9.6c.8 2 1.3 3.6 1.3 5H133zm-31.4-5.8A23.3 23.3 0 0 0 89.8 5.3a21 21 0 0 0-9.5-2c-3.6 0-7 .6-9.8 2a23 23 0 0 0-13.8 20.9v.5h5v-.5a16.5 16.5 0 0 1 5-12.7A18.7 18.7 0 0 1 80.4 8a18.7 18.7 0 0 1 16.5 11c1 2.3 1.4 4.6 1.4 7.1v24.2h5v-24a23 23 0 0 0-1.7-8.5zm-53.4-.5a23.2 23.2 0 0 0-44.7 9H8a18 18 0 0 1 6-13.6 18.8 18.8 0 0 1 26.4.9 18.6 18.6 0 0 1 5 12.7 18.5 18.5 0 0 1-5.6 13.5 19.1 19.1 0 0 1-13 5v4.7A22.8 22.8 0 0 0 44 42a24.3 24.3 0 0 0 6-15.7 23 23 0 0 0-1.8-9z"/>
      </defs>
      <use xlink:href="#a"/>
      <path d="M26.7 50.2A23.4 23.4 0 0 1 9 42.5a24.9 24.9 0 0 1-6-16 23.5 23.5 0 0 1 14.3-22c3-1.3 6-1.9 9.4-1.9a23.2 23.2 0 0 1 17 7A23.8 23.8 0 0 1 48.8 35 23.4 23.4 0 0 1 37 48a22 22 0 0 1-10.2 2.2zm0-46.5a22.2 22.2 0 0 0-16.2 6.8 22.8 22.8 0 0 0-5 24 22.4 22.4 0 0 0 11.4 12.6c2.8 1.4 6.1 2 9.8 2a22.4 22.4 0 0 0 17-7.3 24 24 0 0 0 5.8-15.4A22.6 22.6 0 0 0 35.7 5.5a22.2 22.2 0 0 0-9-1.8zm0 41.8a19.7 19.7 0 0 1-13.2-5.2 19 19 0 0 1-5.9-13.9v-1l.1-.3a19.4 19.4 0 0 1 12-16.4 19.5 19.5 0 0 1 5.1-1.2h.1a18.3 18.3 0 0 1 11 2.2 17.2 17.2 0 0 1 4.7 3.7 19.2 19.2 0 0 1 5 10.2v.3l.1 1.3v.3l.1 1A19 19 0 0 1 40 40.2a19.7 19.7 0 0 1-13.3 5.2zm-18-19a18 18 0 0 0 5.3 13 19 19 0 0 0 25.2 0 18 18 0 0 0 5.5-13.2v-1.1l-.2-1.1v-.4a20.3 20.3 0 0 0-1-3.8 18.2 18.2 0 0 0-8.1-9.3h-.1a18.4 18.4 0 0 0-7-2.2A17.4 17.4 0 0 0 17.6 11a18.4 18.4 0 0 0-8.8 14.3v1.3zm90.1-.1a18.2 18.2 0 0 0-11.3-17 20.2 20.2 0 0 0-16.7.7 19 19 0 0 0-8.2 9 18 18 0 0 0-1.5 7.3v24.1h1V26.4a17.2 17.2 0 0 1 10.7-16.2 19.2 19.2 0 0 1 15.9.8 18 18 0 0 1 7.8 8.6c.9 2 1.3 4.4 1.3 6.8v24.1h1v-1"/>
      <path d="M102.8 49.5v1h1V26.3A23.5 23.5 0 0 0 98 11l-.2-.3-.4-.4a23.2 23.2 0 0 0-17-7.3h-.8a22.9 22.9 0 0 0-17.4 7.7l-.2.3a22.8 22.8 0 0 0-5.8 15.3v24.2h1V26.1a22.6 22.6 0 0 1 5.5-14.5l.2-.2.4-.4a21.3 21.3 0 0 1 16.3-7h.7A21.9 21.9 0 0 1 97 11.4l.2.3a21.9 21.9 0 0 1 5.6 14.6m52.9-9.2a23.6 23.6 0 0 0-44 0 23.3 23.3 0 0 0-.3 17.8 23 23 0 0 0 22.2 15h.5v-1h-1a22.2 22.2 0 0 1-20.7-14.3 23.7 23.7 0 0 1 .1-17 23.3 23.3 0 0 1 12-12.4 22 22 0 0 1 9.1-1.9 22.3 22.3 0 0 1 16.4 7 23.8 23.8 0 0 1 6.5 15.9v1.7h-42v.5a17 17 0 0 0 1.9 6.3 19.1 19.1 0 0 0 11 9.5c2 .7 4 1 5.7 1.1h1v-1h-.5a19.2 19.2 0 0 1-11.8-4.4 18.1 18.1 0 0 1-4.5-5.7c-.8-1.5-1.4-3.3-1.6-5.3h41.8v-2.7a23 23 0 0 0-1.8-9z"/>
      <path d="M151.5 18.6a20 20 0 0 0-3.8-5.5 22 22 0 0 0-6-4.3 17.9 17.9 0 0 0-8.1-1.8 19.8 19.8 0 0 0-19 16.8v.5h38.2v-.5c0-1.5-.5-3.2-1.3-5.2zm-35.8 4.7c.2-1.5.6-3 1.2-4.3a19 19 0 0 1 9.8-9.6c2.2-1 4.5-1.4 6.9-1.4 2.8 0 5.4.6 7.6 1.7a21 21 0 0 1 5.8 4.1 19 19 0 0 1 3.5 5.2 13 13 0 0 1 1.2 4.3h-36zm93.6-6.2a23.6 23.6 0 0 0-44 0A23.3 23.3 0 0 0 165 35a23 23 0 0 0 22.2 15h.5v-1h-1.1A22.2 22.2 0 0 1 166 34.7a23.7 23.7 0 0 1 .2-17 23.3 23.3 0 0 1 12-12.4 22 22 0 0 1 9-1.9 22.3 22.3 0 0 1 16.4 7 23.8 23.8 0 0 1 6.5 15.9V28h-42l.1.5a17 17 0 0 0 1.8 6.3 19.1 19.1 0 0 0 11 9.5c2 .7 4 1 5.8 1.1h1v-1h-.5a19.2 19.2 0 0 1-11.8-4.4 18.1 18.1 0 0 1-4.6-5.7c-.8-1.5-1.4-3.3-1.6-5.3H211v-2.7a23 23 0 0 0-1.8-9z"/>
      <path d="M205 18.6c-.8-2-2-3.8-3.7-5.5a22 22 0 0 0-6-4.3 18.3 18.3 0 0 0-15.4-.3 19.8 19.8 0 0 0-11.7 15.3v.5h38.2v-.5c0-1.5-.5-3.2-1.3-5.2zm-35.7 4.7c.2-1.5.6-3 1.2-4.3a19 19 0 0 1 9.8-9.6c2.2-1 4.5-1.4 7-1.4 2.7 0 5.3.6 7.5 1.7a21 21 0 0 1 5.8 4.1c1.6 1.6 2.8 3.4 3.6 5.2a13 13 0 0 1 1.2 4.3h-36.1zm48.8-19.6h45L227 45.4h37.7v-1h-35.5l36-41.7h-48.1v1h1z"/>
      <path d="M263.7 49.3h-45l36.1-41.8h-37.7v1h35.5l-36 41.8h48v-1zm46.9-46.4-.5 1-16.9 33.9v.2l-17.7 35.2-.5 1h1.2l35.6-71.3zm-39.3 0h-1.1L287.5 38l-17.3 36.2h1l.6-1 16.7-35 .1-.2-16.8-34m33.3-1-14 29-14.8-28.7-.1-.3H275l.5 1 15.7 30.3L305.7 4l.5-1z"/>
      <use xlink:href="#a"/>
    `,
    "attributes": {
      "viewBox": "0 0 314.8 76.5",
      "width": "314.8",
    }
	},
});