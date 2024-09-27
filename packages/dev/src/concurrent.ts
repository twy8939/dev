function delay<T>(time: number, value: T): Promise<T> {
  return new Promise((res) => setTimeout(() => res(value), time));
}

interface File {
  name: string;
  body: string;
  size: number;
}

function getFile(name: string): Promise<File> {
  console.log(name);
  return delay(1500, { name, body: "...", size: 100 });
}

async function concurrent<T>(limit: number, fs: (() => Promise<T>)[]) {
  const result: T[][] = [];
  for (let i = 0; i < fs.length / limit; i++) {
    const tmp: Promise<T>[] = [];
    for (let j = 0; j < limit; j++) {
      const f = fs[limit * i + j];
      if (f) tmp.push(f());
    }

    result.push(await Promise.all(tmp));
  }

  return result.flat();
}

async function concurrent2<T>(limit: number, fs: (() => Promise<T>)[]) {}

export async function main() {
  console.time();
  const files = await concurrent(2, [
    () => getFile("file1.png"),
    () => getFile("file2.png"),
    () => getFile("file3.png"),
    () => getFile("file4.png"),
    () => getFile("file5.png"),
    () => getFile("file6.png"),
    () => getFile("file7.png"),
  ]);

  console.log(files);

  console.timeEnd();
}
