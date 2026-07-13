// Line comment
/* block comment */

import other.aleo;

export struct Point {
    x: u32,
    y: u32,
}

export const MAX: u32 = 100u32;

interface Shape : Base + Drawable {
    view fn area() -> field;
    record Token { owner: address, .. }
    mapping balances: address => u64;
    storage counter: u64;
}

export view fn peek() -> u8 {
    return 0u8;
}

program test.aleo : Shape {
    @noupgrade
    constructor() {}

    record Token {
        owner: address,
        amount: u64,
    }

    mapping balances: address => u64;
    storage total: u128;
    const SEED: field = 42field;

    @test(mapping = "balances")
    fn main(public a: u32, b: bool) -> (bool, u32) {
        let p: Point = Point { x: 1u32, y: 2u32 };
        let q: Point = Point { x: 5u32, ..p };
        let big: u128 = 0xFFu128;
        let f: field = 0xFFfield;
        let g: group = 2group;
        let s: scalar = 7scalar;
        let addr: address = aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjks8h5;
        let name: string = "hello";
        let tag = 'aleo';
        let maybe: u8? = none;
        let arr: [u8; 4] = [0u8; 4];
        let r: dyn record = credits.aleo::token as dyn record;
        let sum: u32 = a + b as u32 * 2u32;
        let val: u32 = other.aleo::mod::item;
        let dyn_res: u32 = Iface@(self.caller)::run(a);
        let got: u64 = Registry@(target, network)::store.get(b);

        if a > 10u32 {
            return (true, a);
        } else {
            for i: u32 in 0u32..a {
                assert_eq(i, i);
            }
        }
        assert(b);
        return (b, a);
    }

    fn helper::[N: u32](x: u32) -> u32 {
        return x;
    }
}
