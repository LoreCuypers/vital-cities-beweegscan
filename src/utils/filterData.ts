import { Ambitie, Benchmark } from '../interfaces/data'

const ambitions = [
  'actief bewegen',
  'verbonden stadskern',
  'fiets- en wandelroutes',
  'sporten',
  'spelen',
  'ontmoeten',
  'groen',
]

export const getAllCities = (allData: any) => {
  const results: string[] = []

  allData.forEach((edge: any) => {
    edge.edges.forEach((node: any) => {
      if (!results.includes(node.node.gemeente)) {
        results.push(node.node.gemeente)
      }
    })
  })
  console.log(results)

  return results
}

export const getAllData = (allData: any) => {
  const results: Ambitie[] = []

  ambitions.forEach((ambition: string) => {
    const ambitionResults: Ambitie[] = getDataForAmbition(allData, ambition)

    results.push({ label: ambition, benchmarks: ambitionResults[0].benchmarks })
  })
  console.log(results)

  return results
}

export const getAllDataForCity = (allData: any, city: string) => {
  const results: Ambitie[] = []

  ambitions.forEach((ambition: string) => {
    const ambitionResults: Ambitie[] = getDataForCityAndAmbition(
      allData,
      ambition,
      city,
    )

    results.push({
      label: ambition,
      benchmarks: ambitionResults[0].benchmarks,
    })
  })
  console.log(results)

  return results
}

export const getDataForAmbition = (allData: any, ambition: string) => {
  const relevantEdges: any[] = []
  const results: Ambitie[] = []
  const benches: Benchmark[] = []

  allData.forEach((edge: any) => {
    if (checkIndex(allData.indexOf(edge)) == ambition) {
      relevantEdges.push(edge.edges)
    }
  })

  if (relevantEdges) {
    let label = ''
    const nodes: any[] = []

    relevantEdges.forEach((edge: any, index: number) => {
      if (
        typeof edge[0].node.item == 'undefined' ||
        (ambition == 'actief bewegen' && index == 3)
      ) {
        label = edge[0].node.indicator
      } else {
        label = edge[0].node.item
      }

      edge.forEach((node: any) => {
        nodes.push(node.node)
      })

      benches.push({ label: label, data: nodes })
    })
  }
  results.push({ label: ambition, benchmarks: benches })

  return results
}

export const getDataForCityAndAmbition = (
  allData: any,
  ambition: string,
  city: string,
) => {
  const ambitionData: Ambitie[] = getDataForAmbition(allData, ambition)
  const results: Ambitie[] = [{ label: ambition, benchmarks: [] }]

  ambitionData[0].benchmarks.forEach((benchmark: Benchmark) => {
    const bench: Benchmark = { label: benchmark.label, data: [] }
    benchmark.data.forEach((node: any) => {
      if (
        node.gemeente &&
        node.gemeente.toLowerCase().replaceAll(' ', '') ==
          city.toLowerCase().replaceAll(' ', '') &&
        (bench.label == node.indicator || bench.label == node.item)
      ) {
        bench.data.push(node)
      }
    })
    results[0].benchmarks.push(bench)
  })
  console.log(results)

  return results
}

const checkIndex = (index: number): string => {
  if (0 <= index && index <= 3) {
    return 'actief bewegen'
  } else if (4 <= index && index <= 7) {
    return 'verbonden stadskern'
  } else if (8 <= index && index <= 14) {
    return 'fiets- en wandelroutes'
  } else if (15 <= index && index <= 19) {
    return 'sporten'
  } else if (20 <= index && index <= 22) {
    return 'spelen'
  } else if (23 <= index && index <= 27) {
    return 'ontmoeten'
  } else if (28 <= index && index <= 31) {
    return 'groen'
  } else {
    return 'no ambition found'
  }
}
