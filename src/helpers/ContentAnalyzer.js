export default {
  me: this,
  contentMaker: function (doc) {
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
    return { elements: finalElementsArray, images: finalImagesArray, date: new Date() }
  },
  statisticMaker: function (doc, result) {
    const elements = [...doc.getElementsByTagName('*')]
    const finalTotal = []
    elements.filter(x => x.nodeName === 'H1' || x.nodeName === 'P' || x.nodeName === 'H2' || x.nodeName === 'H3').forEach(x => finalTotal.push(x.innerText.split(' ').length))
    let finalResult = []
    result.elements.forEach((x) => finalResult.push(x.text.split(' ').length))
    const totalWords = finalTotal.reduce((x, y) => x + y)
    const resultWords = finalResult.reduce((x, y) => x + y)
    const totalTime = totalWords / 220
    const resultTime = resultWords / 220
    const savedTime = totalTime - resultTime
    return {
      date: result.date.valueOf(),
      totalWords,
      resultWords,
      totalTime,
      resultTime,
      savedTime
    }
  }

}
