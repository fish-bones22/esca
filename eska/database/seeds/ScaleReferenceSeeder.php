<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class ScaleReferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('scale_references')->insert([
        [
            'id' => Uuid::uuid4(),
            'name' => 'major',
            'display' => 'Major',
            'description' => null,
            'order' => 1,
            'updated_at' => Carbon::now(),
            'created_at' => Carbon::now()
        ],
        [
            'id' => Uuid::uuid4(),
            'name' => 'minor',
            'display' => 'Minor',
            'description' => null,
            'order' => 2,
            'updated_at' => Carbon::now(),
            'created_at' => Carbon::now()
        ]
        ]);
    }
}
