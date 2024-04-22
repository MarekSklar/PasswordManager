export async function login(id: string, key: string, fileContentPromise: Promise<string> | string) {
    
    const data = fileContentPromise = "" ? "" : await fileContentPromise;

    const loginBackEnd = window['backEnd'].login;
    const decipheredData = await loginBackEnd(id, key, data);

    console.log(decipheredData, id, key, data);
}