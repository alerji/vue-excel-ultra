import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'JsonExcel.vue',
    output: [ 
        {
            format: 'cjs',
            file: 'dist/vue-excel-ultra.cjs.js'
        },
        {
            format: 'esm',
            file: 'dist/vue-excel-ultra.esm.js'
        },
        {
            name: 'JsonExcel',
            format: 'umd',
            file: 'dist/vue-excel-ultra.umd.js'
        }
    ],
    plugins: [
        vue(),
        commonjs(),
        resolve()
    ]
}
