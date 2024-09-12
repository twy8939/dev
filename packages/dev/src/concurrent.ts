function delay<T>(time: number, value: T): Promise<T> {
  return new Promise((res) => setTimeout(() => res(value), time));
}

export async function concurrent() {
  console.log(await delay(1000, "hello"));
  console.log(await delay(2000, "world"));
  console.log(await delay(3000, "!!!"));
}
