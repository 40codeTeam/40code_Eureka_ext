
(function (Scratch) {
    "use strict";
    if (!Scratch.extensions.unsandboxed) {
        throw new Error(`
            "XXX" must be loaded in a unsandboxed environment.
        `);
    }
    const { BlockType, ArgumentType, Cast } = Scratch;

    class XXX { }

    Scratch.extensions.register(new XXX());
})(Scratch);