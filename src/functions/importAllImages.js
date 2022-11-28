export const importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export const requireImages = (folder) => {
    return require.context(folder, false, /\.(png|jpe?g|svg)$/)
} 