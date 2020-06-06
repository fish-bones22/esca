<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class KeyReferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('key_references')->insert([
            [
                'id' => Uuid::uuid4(),
                'root' => 'C',
                'alternative_root' => null,
                'alternative_display' => null,
                'display' => 'Key of C',
                'order' => 1,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'C#',
                'alternative_root' => 'Db',
                'display' => 'Key of C♯',
                'alternative_display' => 'Key of D♭',
                'order' => 2,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'D',
                'display' => 'Key of D',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 3,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'D#',
                'alternative_root' => 'Eb',
                'display' => 'Key of D♯',
                'alternative_display' => 'Key of E♭',
                'order' => 4,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'E',
                'display' => 'Key of E',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 5,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'F',
                'display' => 'Key of F',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 6,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'F#',
                'alternative_root' => 'Gb',
                'display' => 'Key of F♯',
                'alternative_display' => 'Key of A♭',
                'order' => 7,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'G',
                'display' => 'Key of G',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 8,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'G#',
                'alternative_root' => 'Ab',
                'display' => 'Key of G♯',
                'alternative_display' => 'Key of A♭',
                'order' => 9,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'A',
                'display' => 'Key of A',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 10,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'A#',
                'alternative_root' => 'Bb',
                'display' => 'Key of A♯',
                'alternative_display' => 'Key of B♭',
                'order' => 11,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'B',
                'display' => 'Key of B',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 12,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ]
        ]);
    }
}
