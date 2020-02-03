export default function (doc) {
  const elements = doc.getElementsByTagName('*')
  const finalElementsArray = []
  const finalImagesArray = []
  for (let el of elements) {
    if (el.nodeName === 'H1') {
      finalElementsArray.push({ text: el.innerText, type: 'maintitle' })
    }
    if (finalElementsArray.filter(x => x.type === 'maintitle').length > 0) {
      if (el.nodeName === 'P') {
        if (el.innerText.length > 10) {
          finalElementsArray.push({ text: el.innerText.split('.')[0], type: 'text' })
        }
      }
      if (el.nodeName === 'H2' || el.nodeName === 'H3') {
        finalElementsArray.push({ text: el.innerText, type: 'title' })
      }
      if (el.nodeName === 'IMG') {
        finalImagesArray.push({ src: el.src, type: 'image' })
      }
    }
  }
  return [finalElementsArray, finalImagesArray]
}
