export default (data) => {
  // calculate chart values
  const chartSizes = {
    height: data.height - 30,
    width: data.width - 20
  }
  const topValue = [...data.statistics].sort((x, y) => x.savedTime - y.savedTime)[data.statistics.length - 1].savedTime
  console.log(topValue)
  const chartMoves = {
    right: chartSizes.width / data.statistics.length,
    heightRange: (chartSizes.height - 10) / topValue
  }

  let right = 20

  // draw the chart body and write the title
  data.vuectx.beginPath()
  data.vuectx.font = '12px Arial'
  data.vuectx.fillText('Last 10 days saved time', data.width - 130, 12)
  data.vuectx.beginPath()
  data.vuectx.font = '9px Arial'
  data.vuectx.fillText(topValue, 12, 14)
  data.vuectx.moveTo(5, 19)
  data.vuectx.strokeStyle = '#2c3e50'
  data.vuectx.lineTo(15, 19)
  data.vuectx.stroke()
  data.vuectx.beginPath()
  data.vuectx.font = '9px Arial'
  data.vuectx.fillText(topValue * 0.75, 12, data.height / 4 + 5)
  data.vuectx.moveTo(5, data.height / 4 + 10)
  data.vuectx.lineTo(15, data.height / 4 + 10)
  data.vuectx.stroke()
  data.vuectx.beginPath()
  data.vuectx.font = '9px Arial'
  data.vuectx.fillText(topValue * 0.5, 12, data.height / 2 + 5)
  data.vuectx.moveTo(5, data.height / 2 + 10)
  data.vuectx.lineTo(15, data.height / 2 + 10)
  data.vuectx.stroke()
  data.vuectx.beginPath()
  data.vuectx.font = '9px Arial'
  data.vuectx.fillText(topValue * 0.25, 12, data.height * 0.75 + 5)
  data.vuectx.moveTo(5, data.height * 0.75 + 10)
  data.vuectx.lineTo(15, data.height * 0.75 + 10)
  data.vuectx.stroke()
  data.vuectx.beginPath()
  data.vuectx.lineWidth = 2
  data.vuectx.moveTo(10, 10)
  data.vuectx.lineTo(10, data.height - 2)
  data.vuectx.stroke()
  data.vuectx.beginPath()
  data.vuectx.lineWidth = 2
  data.vuectx.strokeStyle = '#2c3e50'
  data.vuectx.moveTo(2, data.height - 10)
  data.vuectx.lineTo(data.width - 10, data.height - 10)
  data.vuectx.stroke()

  // start draw the data lines
  data.vuectx.beginPath()
  data.vuectx.lineWidth = 1
  data.vuectx.strokeStyle = '#2c3e50'
  for (let c of data.statistics) {
    data.vuectx.lineTo(right, (chartSizes.height + 20) - c.savedTime * chartMoves.heightRange)
    right += chartMoves.right
    data.vuectx.stroke()
  }

  right = 20

  // draw the data points
  data.vuectx.beginPath()
  data.vuectx.fillStyle = '#95a5a6'

  data.vuectx.lineWidth = 2
  for (let c of data.statistics) {
    data.vuectx.beginPath()
    data.vuectx.arc(right, (chartSizes.height + 20) - c.savedTime * chartMoves.heightRange, 2, 0, Math.PI * 2)
    data.vuectx.fill()
    data.vuectx.stroke()
    right += chartMoves.right
  }
  console.log(chartSizes, chartMoves)

  data.vuectx.closePath()
}
