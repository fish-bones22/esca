<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class SongTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('song_tags')->insert([
            [
            'id' => '9db87722-47c0-4fd0-ae3a-eb6c432624f3',
            'name' => 'Upbeat',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ], [
            'id' => '3c9dec5e-7987-4d37-812f-f184cbc21e61',
            'name' => 'Relaxed',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ], [
            'id' => '08202b04-98d2-4a4b-bcde-43cf69539c82',
            'name' => 'Slow',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ], [
            'id' => 'ec8dcaba-2192-48f4-940b-5d123be46fc7',
            'name' => 'English',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ], [
            'id' => 'cef391a4-0200-440d-bfd3-4bbc2616edcc',
            'name' => 'Filipino',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]]);
    }
}
