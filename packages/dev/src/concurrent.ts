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

export async function concurrent() {
  const file = getFile("file1.png");

  const result = await Promise.race([file, delay(1000, "timeout")]);

  if (result === "timeout") {
    console.log("로딩");
    console.log(await file);
  } else {
    console.log("로딩 없이 표시");
  }
}
