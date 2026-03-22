
export const images: string[] = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
