import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2500);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow(`      CLI Based Fighting Game\n`);
    await sleep();
    title.stop();
}
export { welcome };
