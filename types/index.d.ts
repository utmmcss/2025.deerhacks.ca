declare module 'aos'
declare module '@pmndrs/assets/hdri/city.exr' {
  const url: string
  export default url
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
