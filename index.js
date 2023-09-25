const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${process.argv[2]}`;

fetch(url).then(async (res) => {
    const data = await res.json();
    const address1 = data.results[0].address1;
    const address2 = data.results[0].address2;
    const address3 = data.results[0].address3;
    console.log(`${address1},${address2},${address3}`);
})