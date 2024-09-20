function delay<T>(time: number, value: T): Promise<T> {
  return new Promise((res) => setTimeout(() => res(value), time));
}

interface File {
  name: string;
  body: string;
  size: number;
}

function getFile(name: string): Promise<File> {
  return delay(1500, { name, body: "...", size: 100 });
}

async function concurrent(limit, ps) {
  console.log(await Promise.all([ps[0](), ps[1](), ps[2]()]));
  console.log(await Promise.all([ps[3](), ps[4](), ps[5]()]));
}

export async function main() {
  const files = await concurrent(3, [
    () => getFile("file1.png"),
    () => getFile("file2.png"),
    () => getFile("file3.png"),
    () => getFile("file4.png"),
    () => getFile("file5.png"),
    () => getFile("file6.png"),
  ]);

  console.timeEnd();
}
