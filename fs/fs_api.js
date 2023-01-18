import fs from 'fs';

const read_post = (file_name) => {
    return JSON.parse(fs.readFileSync(`./model/${file_name}`, 'utf8'));
};

const write_post = (file_name, data) => {
    return fs.writeFile(`./model/${file_name}`, JSON.stringify(data, null, 4), (err) => {
        if (err) throw err;
        console.log('Created!!!');
    })
};

export {
    read_post,
    write_post
}