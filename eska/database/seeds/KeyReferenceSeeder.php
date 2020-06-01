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
                'scale' => 'Major',
                'display' => 'Key of C Major',
                'order' => 1,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'C#',
                'alternative_root' => 'Db',
                'scale' => 'Major',
                'display' => 'Key of C♯ Major',
                'alternative_display' => 'Key of D♭ Major',
                'order' => 2,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'D',
                'scale' => 'Major',
                'display' => 'Key of D Major',
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
                'scale' => 'Major',
                'display' => 'Key of D♯ Major',
                'alternative_display' => 'Key of E♭ Major',
                'order' => 4,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'E',
                'scale' => 'Major',
                'display' => 'Key of E Major',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 5,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'F',
                'scale' => 'Major',
                'display' => 'Key of F Major',
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
                'scale' => 'Major',
                'display' => 'Key of F♯ Major',
                'alternative_display' => 'Key of A♭ Major',
                'order' => 7,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'G',
                'scale' => 'Major',
                'display' => 'Key of G Major',
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
                'scale' => 'Major',
                'display' => 'Key of G♯ Major',
                'alternative_display' => 'Key of A♭ Major',
                'order' => 9,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'A',
                'scale' => 'Major',
                'display' => 'Key of A Major',
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
                'scale' => 'Major',
                'display' => 'Key of A♯ Major',
                'alternative_display' => 'Key of B♭ Major',
                'order' => 11,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'id' => Uuid::uuid4(),
                'root' => 'B',
                'scale' => 'Major',
                'display' => 'Key of B Major',
                'alternative_root' => null,
                'alternative_display' => null,
                'order' => 12,
                'updated_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ]
        ]);
    }
}
